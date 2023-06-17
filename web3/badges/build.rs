use app_io::TransactionsMetadata;
use gear_wasm_builder::WasmBuilder;
use gmeta::Metadata;

fn main() {
    WasmBuilder::with_meta(TransactionsMetadata::repr())
        .exclude_features(vec!["binary-vendor"])
        .build();
}
