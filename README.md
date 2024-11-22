# Project 3 - Milestone 2 - Props, Rendering, Hooks

### **React Project: Blog Post Dashboard with Props, Rendering, and Hooks**

**Objective**

Guide students through using **props** to pass data, understanding **rendering** techniques for efficient UI updates, and implementing **hooks (**useState**,** useEffect**)** for state management and side effects. By the end of this project, students will build a **Blog Post Dashboard** that displays a list of blog posts with author information and fetches additional user data.

**1. Initial Project Setup**

**Step 1: Create the React Project**

•	Open a terminal and run:

```bash
npx create-react-app blog-post-dashboard
cd blog-post-dashboard
npm start
```

**Step 2: Project Structure**

Organize the project files to maintain clarity and separation of concerns.

blog-post-dashboard/

```bash
blog-post-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Post.jsx
│   │   ├── PostList.jsx
│   │   ├── Author.jsx
│   │   └── UserFetcher.jsx
│   ├── App.jsx
│   └── index.js
└── package.json
```

**2. Creating Components with Props**

**Component 1: Header**

**Purpose**: Display the main title of the application.

**Detailed Code Snippet**:

```jsx
// src/components/Header.jsx
import React from 'react';

// Functional component that accepts 'title' as a prop and displays it
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
```

**Explanation**:

•	The Header component is a simple functional component that takes title as a prop.

•	Props are passed as function arguments and are read-only, meaning they cannot be modified inside the component.

**Component 2: Author**

**Purpose**: Display the author’s name passed as a prop.

**Detailed Code Snippet**:

```jsx
// src/components/Author.jsx
import React from 'react';

// Functional component that displays the author's name
function Author({ name }) {
  return <p><strong>Written by:</strong> {name}</p>;
}

export default Author;
```

**Explanation**:

•	Author receives name as a prop and renders it within a <p> element.

**Component 3: Post**

**Purpose**: Render a single blog post and include the Author component to show the author’s name.

**Detailed Code Snippet**:

```jsx
// src/components/Post.jsx
import React from 'react';
import Author from './Author';

// Component that represents a single post, accepting 'title', 'content', and 'author' as props
function Post({ title, content, author }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
      <Author name={author} />
    </article>
  );
}

export default Post;
```

**Explanation**:

•	The Post component uses props to receive data and passes the author prop to the Author component.

•	Demonstrates component composition by including Author as a child component.

**Component 4: PostList**

**Purpose**: Display a list of posts by mapping over an array of post data.

**Detailed Code Snippet**:

```jsx
// src/components/PostList.jsx
import React from 'react';
import Post from './Post';

// Component that accepts an array of posts as props and renders a list of Post components
function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <Post 
          key={post.id} 
          title={post.title} 
          content={post.content} 
          author={post.author} 
        />
      ))}
    </div>
  );
}

export default PostList;
```

**Explanation**:

•	Uses map() to iterate over the posts array and render a Post component for each item.

•	Ensures each rendered Post has a unique key prop for React’s efficient re-rendering.

**3. Using Hooks for State Management and Side Effects**

**Component 5: UserFetcher**

**Purpose**: Fetch user data from an API using useEffect and display the data in the component.

**Detailed Code Snippet**:

```jsx
// src/components/UserFetcher.jsx
import React, { useState, useEffect } from 'react';

// Component that fetches user data from an API and displays it
function UserFetcher() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    }

    fetchUser();
  }, []); // Runs once when the component mounts

  if (loading) return <p>Loading user data...</p>;

  return (
    <div>
      {user ? (
        <>
          <h2>User Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </>
      ) : (
        <p>Failed to load user data.</p>
      )}
    </div>
  );
}

export default UserFetcher;
```

**Explanation**:

•	useState initializes user to null and loading to true.

•	useEffect runs the fetchUser function once when the component mounts, fetching data from an external API.

•	The component conditionally renders a loading message, user data, or an error message.

**4. Integrating Components in App.jsx**

**Purpose**: Combine all components to create the full application structure.

**Detailed Code Snippet**:

```jsx
// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import UserFetcher from './components/UserFetcher';

// Main App component that combines all other components
function App() {
  const [posts] = useState([
    { id: 1, title: 'First Post', content: 'This is my first post!', author: 'Alice' },
    { id: 2, title: 'Second Post', content: 'This is my second post!', author: 'Bob' },
  ]);

  return (
    <div>
      <Header title="Blog Post Dashboard" />
      <UserFetcher />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
```

**Explanation**:

•	The App component acts as the main container that holds Header, UserFetcher, and PostList.

•	useState initializes an array of posts that is passed to PostList as props.

**5. Conclusion and Discussion Points**

•	**Props**: Explain how props are used to pass data down the component tree and how they are immutable.

•	**Rendering**: Highlight the importance of unique key props for lists and the efficiency of React’s reconciliation.

•	**Hooks**:

•	**useState**: Demonstrates how to add and manage state within functional components.

•	**useEffect**: Introduces handling side effects and data fetching in React components.

**Practice Exercise for Students**:

•	Extend the UserFetcher to display more detailed user information or fetch a different user based on user interaction.

•	Add conditional rendering in Post to display an “Edited” label if the post content has been modified.