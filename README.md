
---

# ZK-Based Authentication System using zkAuth Kit

## Project Overview

This project is a **Zero-Knowledge Proof (ZK Proof)** based authentication frontend using the **zkAuth Kit**. The goal is to develop a front-end registration and login system that integrates with backend authentication functionality provided by **Verisync Labs**. The frontend implements the zero-knowledge proof process to enhance user authentication security by not exposing sensitive information, such as passwords.

## Objective

- Develop a user interface that integrates **ZK Proof-based** registration and login flows.
- Leverage WebAssembly (WASM) compiled JavaScript functions for ZK proof generation and verification.
- Connect the frontend UI with Verisinc Labs' backend code for proof verification.

## Features

- **Registration Flow**: Users can securely register with a username and password.
- **Login Flow**: Users authenticate by generating a ZK proof of their credentials, verified by the backend.
- **Error Handling**: Provides validation feedback for failed proofs and invalid inputs.

## Project Structure

- **Frontend**: Implements the UI components for registration and login.
- **WASM Integration**: Uses zkAuth Kit's compiled WebAssembly functions (`get_pass_hash`, `generate_proof`, and `verify_proof`) for secure ZK proof handling.
- **Backend Integration**: Connects with Verisinc Labs' backend for proof verification and password hash storage.

## Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/mohitrajsinghit/ZK_Auth.git
   cd zk-authentication
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Place the **zkAuth Kit** `pkg` folder into the `src` directory for WASM integration.

4. Start the application:
   ```bash
   npm start
   ```

## Implementation Details

### Registration Flow

1. **Registration Page**: Users input a username and password.
2. **Hash Generation**: Uses `get_pass_hash` from the WASM file to hash the password.
3. **Storage**: Hash is stored in the backend (handled by Verisinc Labs' backend setup).

### Login Flow

1. **Login Page**: Users enter credentials.
2. **Proof Generation**: `generate_proof` creates a ZK proof based on user credentials.
3. **Backend Verification**: Proof is sent to the backend for verification using Verisinc Labs' code. The system displays success or failure based on verification.

## Evaluation Criteria

- **Functionality**: Registration and login should store and verify password hashes using ZK proofs effectively.
- **Code Structure**: Modular, organized code with clear separation between frontend and WASM calls.
- **Error Handling**: Validates user inputs and manages errors like failed proof verification or invalid inputs.

## Technologies Used

- **JavaScript**: Frontend functionality.
- **WebAssembly (WASM)**: ZK proof functions (password hashing, proof generation, verification).
- **Backend Integration**: Verisinc Labs’ backend for proof verification.

## Example Usage

1. Register on the frontend with username and password.
2. Login with the same credentials.
3. View proof-based verification results displayed as success or failure.

## Contribution

Contributions are welcome. Fork the project and submit pull requests with enhancements or fixes.

## License

This project is open-source and available under the MIT License.

---
