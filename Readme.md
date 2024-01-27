# Community API

This project is a Community API that allows users to sign up, sign in, create and view communities, and add or remove community members.

## Tech Stack

- Language: Node v14+
- Database: MySQL
- ORM: Sequelize
- Library: @theinternetfolks/snowflake for generating unique IDs

## API Endpoints

### Role

#### Create Role

- **Method:** POST
- **URL:** /v1/role

#### Get All Roles

- **Method:** GET
- **URL:** /v1/role

### User

#### Sign Up

- **Method:** POST
- **URL:** /v1/auth/signup

#### Sign In

- **Method:** POST
- **URL:** /v1/auth/signin

#### Get Me

- **Method:** GET
- **URL:** /v1/auth/me

### Community

#### Create Community

- **Method:** POST
- **URL:** /v1/community

#### Get All Communities

- **Method:** GET
- **URL:** /v1/community

#### Get All Members

- **Method:** GET
- **URL:** /v1/community/:id/members

#### Get My Owned Community

- **Method:** GET
- **URL:** /v1/community/me/owner

#### Get My Joined Community

- **Method:** GET
- **URL:** /v1/community/me/member

### Member

#### Add Member

- **Method:** POST
- **URL:** /v1/member

#### Remove Member

- **Method:** DELETE
- **URL:** /v1/member/:id

## Getting Started

### Prerequisites

- Node.js v14+
- Database - MySQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/community_API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd community_API
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your database and configure the connection in `config/config.js`.

### Usage

Explain how to run and use your project. Provide examples if applicable.

```bash
npm start
```

## API Documentation

Provide details about the API endpoints and their usage.

### Contributing

If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

### License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.
```

Feel free to customize it further according to your project's specifics.