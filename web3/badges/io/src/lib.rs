//! Data types for the contract input/output.

#![no_std]

use gmeta::{InOut, Metadata};
use gstd::{prelude::*, ActorId};

#[derive(Debug, Encode, Decode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum Action {
    InitCompra {
        compra_id: ActorId,
        vendedor_id: ActorId,
        comprador_id: ActorId},
    Aprove{
        actor_id: ActorId},
}

#[derive(Debug, Encode, Decode, TypeInfo)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub enum Event{
    InitCompra { compra_id: ActorId, vendedor_id: ActorId, comprador_id: ActorId},
    Aprove{actor_id: ActorId}, 
}
#[derive(Debug, Encode, Decode, TypeInfo, Clone)]
#[codec(crate = gstd::codec)]
#[scale_info(crate = gstd::scale_info)]
pub struct Contrato {

    pub vendedor: ActorId,
    pub comprador: ActorId,
    pub aprovC: Option<bool>,
    pub aprovS: Option<bool>,
}
pub struct TransactionsMetadata;
impl Metadata for TransactionsMetadata{
    type Init = ();
    type Handle = InOut<Action, Event>;
    type Reply = ();
    type Others = ();
    type Signal = ();
    type State = Vec<(ActorId,Contrato)>;
}
