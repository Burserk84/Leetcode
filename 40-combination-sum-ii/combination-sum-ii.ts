function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);           // sort for pruning + duplicate handling
  const res: number[][] = [];
  const path: number[] = [];

  function dfs(start: number, remain: number) {
    if (remain === 0) {                        // reached exact target
      res.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      // skip duplicates at the same depth
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      const val = candidates[i];
      if (val > remain) break;                 

      path.push(val);                          
      dfs(i + 1, remain - val);                
      path.pop();                              
    }
  }

  dfs(0, target);
  return res;
}
