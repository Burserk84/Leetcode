/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []; // This will store all our valid combinations.

    /**
     * The recursive backtracking function.
     * @param {number} remain - The remaining sum we need to achieve.
     * @param {number[]} combination - The current combination we are building.
     * @param {number} start - The starting index in the candidates array to explore from.
     */
    function backtrack(remain, combination, start) {
        // Base Case 1: We found a valid combination.
        if (remain === 0) {
            // We push a copy because the 'combination' array will be modified later during backtracking.
            result.push([...combination]);
            return;
        }

        // Base Case 2: We overshot the target.
        if (remain < 0) {
            return;
        }

        // Explore candidates starting from the 'start' index.
        for (let i = start; i < candidates.length; i++) {
            // 1. Choose a candidate
            combination.push(candidates[i]);
            
            // 2. Explore with the new state
            // We pass 'i' as the new start index because we can reuse the same number.
            backtrack(remain - candidates[i], combination, i);
            
            // 3. Unchoose (Backtrack)
            // We remove the last added candidate to try the next one in the loop.
            combination.pop();
        }
    }

    // Start the backtracking process.
    backtrack(target, [], 0);
    
    return result;
};