const fs = require('fs');
const path = 'c:/Users/R.F COMPUTERS/OneDrive/Desktop/Coding folders/edanso portfolio/style.css';
try {
  const s = fs.readFileSync(path, 'utf8');
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '{') stack.push('{');
    else if (c === '}') {
      if (stack.length === 0) {
        console.error('Unmatched closing } at index ' + i);
        process.exit(2);
      }
      stack.pop();
    }
  }
  if (stack.length) {
    console.error('Unmatched { count: ' + stack.length);
    process.exit(2);
  }
  const openComments = (s.match(/\/\*/g) || []).length;
  const closeComments = (s.match(/\*\//g) || []).length;
  if (openComments !== closeComments) {
    console.error('Comment count mismatch /*:' + openComments + ' */:' + closeComments);
    process.exit(2);
  }
  console.log('CSS quick-check: OK');
} catch (err) {
  console.error('Error reading file:', err.message);
  process.exit(3);
}
