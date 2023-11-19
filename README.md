# Nombre del Proyecto

A team sorter library for code-jam events based on the seniority of applicants and the number of teams desired.

## Contents table

- [Install](#Install)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [License](#License)
- [Authors](#Authors)

## Install

- clone the repository from github
- install the package by `npm i` or `npm install`

## Usage

### Using the Sorter Class

To utilize the functionality provided by the `Sorter` class in `sorter.js`, follow these steps:

1. **Import the Sorter Class**:

    ```javascript
    const Sorter = require('./sorter.js');
    ```

2. **Create an Instance of Sorter**:

    ```javascript
    // Replace 'size' and 'members' with your desired values
    const sorter = new Sorter(size, members);
    ```

3. **Set the Team Size** (Optional):

    ```javascript
    // Set a custom size for teams
    sorter.setTeamSize(customSize);
    ```

4. **Execute Sorting**:

    ```javascript
    sorter.executeSorting();
    ```

5. **Access Teams Information**:

    ```javascript
    // Get all teams
    const teams = sorter.getTeams();

    // Get a specific team by index
    const specificTeam = sorter.getTeam(index);

    // Display teams in the console
    sorter.showTeams();
    ```

6. **Adding Members**:

    ```javascript
    // Add a single member
    sorter.addMember(person);

    // Add multiple members
    sorter.addMembers(persons);
    ```

7. **Importing Members from JSON**:

    ```javascript
    // Replace 'filepath' and 'member' with appropriate values
    sorter.importMember(filepath, member);
    ```
    

### Using the readJSONData Function

The `readJSONData` function in `jsonIO.js` assists in parsing JSON data for member information. Here's how you can use it:

1. **Import the Function**:

    ```javascript
    const readJSONData = require('./jsonIO.js');
    ```

2. **Call the Function with JSON Data**:

    ```javascript
    // Pass your JSON data to parse
    const parsedData = readJSONData(yourJSONData);
    ```

3. **Utilize the Parsed Data**:

    The function returns parsed data with member information.

    ```javascript
    // Use the parsed data as needed
    console.log(parsedData); // Example: Display parsed data in the console
    ```

Please ensure to replace placeholder values like `'size'`, `'members'`, `'filepath'`, `'member'`, and `'yourJSONData'` with actual data and variables from your application.


## Contribution

Thank you for considering contributing to our library! We value the input of our community.

### Consultation with Authors

As this library is maintained by a specific team, we kindly request interested collaborators to consult with the authors before making significant changes or proposing major features.

#### Consultation Process

1. **Open an Issue:** Before starting any work on a new feature or significant change, open an issue in the repository to discuss the proposal. Clearly describe the details of your idea or change.

2. **Open Discussion:** The community and authors will review the proposal in the open issue. Participation and constructive feedback are encouraged to improve the proposal.

3. **Author Approval:** Once the proposal has been discussed and reviewed, the authors will assess the feasibility and relevance of the change. Feedback or approval will be provided before proceeding with implementation.

4. **Contribution:** Upon approval of the proposal, you may proceed with the implementation in a pull request. Make sure to reference the relevant issue in your pull request.

#### Types of Changes

- For minor fixes or changes without significant impact, feel free to make the contribution without prior consultation.
- For changes affecting the architecture, core functionalities, or altering the public API, prior consultation is required.

We appreciate your cooperation and willingness to improve this library. We look forward to collaborating with you!


## License

This repository is licensed under the MIT License, Copyright (c) 2023 Fran J. Alvarez.

## Authors

@franalvarez21 @DavidAugustoHernandezMartin @Depechejuan

