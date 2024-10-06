# NYTimes Connections

Welcome to the **NYTimes Connections**! This project is a web-based imitation of the popular NYTimes Connections game. The goal is to offer a similar experience to the real game, but with our own puzzles added. 

## Introduction

This project is built using **Next.js**, a powerful React framework, and uses **Supabase** as the backend database solution.

*Note: This project is for educational and personal purposes only. All rights to the original game concept belong to **The New York Times**.*

## Technologies Used
- **Next.js**: For the frontend user interface.
- **Supabase**: To handle backend operations and storing puzzles
- **JavaScript**: For logic and interactivity.
- **TailwindCSS**: For CSS and styling.

## Features
- User-friendly interface that mimics the gameplay of NYTimes Connections.
- Supabase integration for data persistence.
- Responsive design for seamless experience across devices.
- Ability to view and play past puzzles uploaded to the site.
- Ability to add puzzles through a frontend interface via ```{URL}/create```.
- Additional features such as a "Give up" button to solve the puzzle for you.
- Infinite tries because not all of us are good at this game.

## Installation and Setup

### Prerequisites
Make sure you have the following installed on your local development machine:
- **Node.js** (>= 20.x)
- **npm** or **yarn**
- **Supabase** account

### Steps to Install and Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shihan259/Connections.git
   cd Connections
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up Supabase**:
    - Create a project on Supabase.
    - Copy your **API key** and **Database URL**

    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-api-key
    ```
4. **Run the development server**:
    ```bash
    npm run dev
    ```

Open http://localhost:3000 to view the application in your browser.

## Credits

- Original game concept by **The New York Times**.
- Built using **Next.js** and **Supabase**.
- Credits to **Ryan** for the unique puzzles.
- Credits to **Cherlyn** for the logo.

## Demo URL
You can view the live version of the website here: [Connections](https://connections-weld.vercel.app/)
You can copy and paste this directly into your README.md file starting from the Credits section! Just