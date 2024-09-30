## React-y commonly Child to ----> Parent Data Transfer hoy.
- State lifting -y Parent to Child Data transfer hoy.

## State lifting sohoj vasay.
- Onyk somoy 'Component' guloky akta same ' **state/data** ' niy kaj korty hoy. Tokhon ak "comp" to arak "comp" data transfer kora somvob hoy na. Karon **Component**   gulor aky oporyr sathy kono connection thaky na. 

       Tokhon muloto **State Lifting** kajy asy.
### **Sate Liftig** many Child gulor nearst Parent "conponent"-y 
    // state create
    // state manage
    // state change
    //sokol childey state sync kora.  

    --
    EX: App.jsx -y 'state create kora'
        onano Component zymo Card.jsx -y syi state acces kora, by 'props'

---




## GPT NOTE

Let’s break down the concept of **State Lifting in React** step by step with a simple and organized approach:

### 1. **What is State?**
- In React, **state** is an object that holds data that can change over time.
- Components can store data (like user inputs or fetched API data) in state.

### 2. **Problem: Components Need to Share Data**
- Sometimes, you have two or more components that need to share or work with the same data.
- For example, you have two input fields (Celsius and Fahrenheit), and you want them to update each other based on the user’s input.

### 3. **Solution: Lifting State Up**
- To share data between components, React recommends moving the **state** to the **common ancestor** of the components. This process is called **lifting state up**.
  
### 4. **Why Do We Lift State?**
- React follows **unidirectional data flow**, meaning data can only be passed from parent to child. When components need to share the same data, you need a common parent to hold that data and share it with the children.
- It ensures **one source of truth** (all components use the same data).

### 5. **How to Lift State: Step-by-Step**

#### Step 1: Find the Common Ancestor
- Find the parent component that both components share. This is where the state will be moved.

#### Step 2: Move the State to the Parent
- Move the `useState()` hook to the common parent so that it holds the data.

#### Step 3: Pass Data as Props
- The parent component will pass down the state and a function to update it as **props** to the child components.

#### Step 4: Child Components Use Props
- The child components can now use the passed props to display and update the shared state.


###  **Summary**
- **State lifting** allows components to share the same data by moving the state to a common parent.
- This ensures **data consistency** between components.
- The parent holds the state, and the children receive and update the state through **props**.

---

