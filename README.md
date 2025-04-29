# DataPilot-Landing


## Setup Instructions

1.  **Clone or Download:** Get the project files onto your local machine.
    ```bash
    git clone https://github.com/tsotne01/DataPilot-Landing.git
    ```
2.  **Navigate to Project Directory:** Open your terminal or command prompt and `cd` into the project folder.
    ```bash
    cd DataPilot-Landing
    ```
3.  **Install Dependencies:** Run the following command to install Tailwind CSS and its dependencies listed in `package.json`:
    ```bash
    npm install
    ```

## Running the Project

1.  **Compile Tailwind CSS:** Run the build script defined in `package.json`, run:
    ```bash
    npm run build:css
    ```
    This will generate the `./css/output.css` file.

2.  **Start the Live Server:** Once the CSS is compiled, run `live-server` from the project's root directory in your terminal:
    ```bash
    live-server
    ```
3.  `live-server` will automatically open the `index.html` file in your default web browser.
