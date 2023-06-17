//! State conversion functions.
//!
//! This module is responsible for converting the state of the contract into a
//! format that can be used by the off-chain Wasm executor (e.g., in the
//! browser).

#![no_std]

use app_io::*;
use gmeta::{metawasm, Metadata};
use gstd::{prelude::*, ActorId};

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));

#[metawasm]
pub mod metafns {
    pub type State = <TransactionsMetadata as Metadata>::State;

    pub type Vector = Vec<Wallet>;

    pub fn print(state: State) -> Vec<ActorId> {
        state.into_iter().collect()
    }
    // pub fn wallet_by_id(state: State, id: Id) -> Option<Wallet> {
    //     state.into_iter().find(|w| w.id == id)
    // }

    // pub fn wallet_by_person(state: State, person: String) -> Option<Wallet> {
    //     state.into_iter().find(|w| w.person == person)
    // }
// }

    /// Get a list of pingers.
    pub fn pingers(state: State) -> Vec<ActorId> {
        state.into_iter().map(|(pinger, _)| pinger).collect()
    }

    /// Get ping count for a pinger.
    pub fn ping_count(state: State, actor: ActorId) -> u128 {
        state
            .into_iter()
            .find_map(|(pinger, ping_count)| (pinger == actor).then_some(ping_count))
            .unwrap_or_default()
    }
}
