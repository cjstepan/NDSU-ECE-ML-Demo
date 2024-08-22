import {Process} from '../model/process';

export const PROCESSES: Process[] = [
    {
      id: 1,
      name: "Understanding Binary: Why It Matters",
      description: `
        <h2>What is Binary?</h2>
        <p>Binary is a number system that uses only two digits: 0 and 1. Unlike the decimal system, which uses digits from 0 to 9, binary is simpler and better suited for computers.</p>
  
        <h2>Why Binary for Computers?</h2>
        <p>Computers work with electrical signals that are either on or off. In binary, "on" is represented by 1 and "off" by 0. This on-off pattern makes it easy for computers to process and store information using binary code.</p>
  
        <h2>Decimal vs. Binary</h2>
        <p>In the decimal system, each digit's position represents a power of 10. For example, in the number 345:</p>
        <ul>
          <li>5 is in the 10<sup>0</sup> (units) place,</li>
          <li>4 is in the 10<sup>1</sup> (tens) place,</li>
          <li>3 is in the 10<sup>2</sup> (hundreds) place.</li>
        </ul>
        <p>In binary, each digit's position represents a power of 2. For example, in the binary number 1011:</p>
        <ul>
          <li>The rightmost digit (1) is in the 2<sup>0</sup> place,</li>
          <li>The next digit (1) is in the 2<sup>1</sup> place,</li>
          <li>The next digit (0) is in the 2<sup>2</sup> place,</li>
          <li>The leftmost digit (1) is in the 2<sup>3</sup> place.</li>
        </ul>
  
        <h2>How to Read Binary</h2>
        <p>To convert binary numbers to decimal, you add up the values of the positions where there's a 1. Using the binary number 1011:</p>
        <ul>
          <li>1 x 2<sup>3</sup> = 8,</li>
          <li>0 x 2<sup>2</sup> = 0,</li>
          <li>1 x 2<sup>1</sup> = 2,</li>
          <li>1 x 2<sup>0</sup> = 1.</li>
        </ul>
        <p>So, 1011 in binary is equal to 8 + 0 + 2 + 1 = 11 in decimal.</p>
  
        <h2>Why We Don't Program in Binary</h2>
        <p>Programming directly in binary (called machine code) would be very complex and error-prone. Instead, we use higher-level programming languages like Python or Java. These languages are easier to use and are converted into binary by compilers or interpreters, allowing us to write code in a more understandable way.</p>
      `
    },
    {
        id: 2,
        name: "Introduction to Logic Gates",
        description: `
          <h2>What are Logic Gates?</h2>
          <p>Logic gates are the fundamental building blocks of computers and electronic components. They are the switches that control how information flows in a circuit. There are three main types of logic gates:</p>
          <ul>
            <li>AND gate: Outputs 1 only if both inputs are 1,</li>
            <li>OR gate: Outputs 1 if any input is 1,</li>
            <li>NOT gate: Inverts the input signal.</li>
          </ul>
          <p>Every other gate and device in a computer can be made from these three basic gates.</p>
        `
    },
    {
        id: 3,
        name: "Logic Gates Demo",
        description: `
          <h2>Explore the Interactive Demo</h2>
          <p>Use the interactive demo below to learn how AND, OR, and NOT gates work. Click on the inputs to see how the gates respond and produce the output.</p>
        `
    },
    {
        id: 4,
        name: "SR Latches and Memory",
        description: `
          <h2>What are SR Latches?</h2>
          <p>SR latches, or Set-Reset latches, are simple memory units used to store values in circuits. They have two inputs:</p>
          <ul>
            <li>Set (S): Sets the output to 1,</li>
            <li>Reset (R): Resets the output to 0.</li>
          </ul>
          <p>SR latches are the building blocks of more complex memory units like flip-flops and registers.</p>
        `
    },
    {
        id: 5,
        name: "SR Latch Demo",
        description: `
          <h2>Explore the Interactive Demo</h2>
          <p>Use the interactive demo below to learn how SR latches work. Set and reset the inputs to see how the latch stores values in memory.</p>
        `
    },
    {
        id: 6,
        name: "Importance of Components in Machine Learning",
        description: `
          <h2>Key Components for Machine Learning</h2>
          <p>Machine learning models require powerful hardware components to run efficiently. Here are some key components:</p>
          <ul>
            <li>CPU (Central Processing Unit): The brain of the computer, responsible for general computing tasks.</li>
            <li>GPU (Graphics Processing Unit): Specialized for rendering graphics and performing complex mathematical computations.</li>
            <li>Memory (RAM): Stores data and instructions for the CPU and GPU to access quickly.</li>
          </ul>
          <h2>Why Components Matter</h2>
          <p>The CPU can run small-scale machine learning models, but GPUs are essential for training large models like neural networks. GPUs can perform parallel computations faster than CPUs, making them ideal for machine learning tasks.</p>
          <p>Memory is crucial for storing and accessing data during model training. More memory allows for faster processing and larger model sizes, leading to better performance.</p>
        `
    }
  ];
  