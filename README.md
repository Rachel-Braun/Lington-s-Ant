![image](https://github.com/user-attachments/assets/346164c0-7d69-4527-bbba-ac5fd2eabfe8)

Langton's Ant 6 is a description of a two-dimensional world in which an ant walks on an infinite grid of squares. All the squares start white. The ant begins at the point (0,0) and moves according to the following rules:

- When the ant encounters a white square, it turns 90 degrees to the right, changes the square’s color to black, and moves one step forward.
- When the ant encounters a black square, it turns 90 degrees to the left, changes the square’s color to white, and moves one step forward.


These simple rules lead to complex behaviors. Starting with an entirely white grid, three distinct behaviors can be identified:

1. **Simplicity**: During the first few hundred steps, the ant creates very simple and often symmetrical patterns.
2. **Chaos**: After a few hundred steps, a large, irregular pattern of black and white squares appears. The ant's path seems random for about 10,000 steps.
3. **Emerging Order**: Finally, the ant begins to form a repeating pattern, called a "highway," consisting of 104 steps that repeat indefinitely.

All initial configurations that have been tested eventually lead to the same repeating pattern, suggesting that the "highway" is the eventual outcome for any path of Langton's Ant.
 However, no one has been able to prove that this is true for all initial configurations.
 It is known, however, that the ant's path is always unbounded, regardless of the initial configuration. This is known as the **Kohen-Kong Theorem**.

 The interface, implemented using an HTML page, illustrates the steps of the ant and also allows control over its speed. Additionally, the size of the grid can be adjusted.
