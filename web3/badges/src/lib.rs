#![no_std]

use gmeta::Metadata;
use gstd::{
    msg,
    prelude::*,
    ActorId,
};
use app_io::{*};
use hashbrown::HashMap;

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));
static mut CONTRACTS: Option<HashMap<ActorId,Contrato>> = None;
// static mut COSA: Vec<> = Vec::new();

fn state_mut() -> &'static mut HashMap<ActorId, Contrato> {
    let contrato = unsafe { CONTRACTS.as_mut() };

    debug_assert!(contrato.is_some(), "state isn't initialized");

    unsafe { contrato.unwrap_unchecked() }
}


#[no_mangle]
extern "C" fn init() {
    unsafe{ CONTRACTS = Some(HashMap::new());} 
}

#[no_mangle]
extern "C" fn handle() {
    let action: Action = msg::load().expect("Invalid message");

    match action {
        Action::InitCompra {
            compra_id,
            vendedor_id,
            comprador_id,
        } => {
            // let mut copia: Option<HashMap<ActorId, Contrato>>;
            let copia = state_mut();

            let estructura = Contrato {
                comprador: comprador_id,
                vendedor: vendedor_id,
                aprovC: None,
                aprovS: None,
            };

            copia.insert(compra_id, estructura);
            // msg::reply(format!("{:?}", copia.clone()), 0);
            // unsafe{ CONTRACTS = copia};
            msg::reply("hello", 0);
        }
        Action::Aprove { actor_id } => {
            msg::reply("hello", 0);
        }
    }
}

#[no_mangle]
extern "C" fn metahash() {
    let metahash: [u8; 32] = include!("../.metahash");
    msg::reply(metahash, 0).expect("Failed to share metahash");
}

#[no_mangle]
extern "C" fn state(){
    let contract = unsafe {
        CONTRACTS.as_mut().expect("state isn't initialized")
    };

    //let copy_contract = contract.clone();
    let example: Vec<(ActorId,Contrato)> = contract.iter().map(|(k,v)| (*k,v.clone())).collect();
    //let example:<TransactionsMetadata as Metadata>::State = state_mut().iter().map(|(k,v)| (k,v)).collect();
    msg::reply( example,0);
}
