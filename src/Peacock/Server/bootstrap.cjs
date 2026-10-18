// A private shutdown channel lets the C# host invoke Peacock's existing exit handlers.
let input = '';
let stopping = false;
function shutdown() {
  if (stopping) return;
  stopping = true;
  if (process.listenerCount('SIGINT')) process.emit('SIGINT', 'SIGINT');
  else process.exit(0);
}
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  input += chunk;
  if (input.includes('\n')) {
    const lines = input.split('\n');
    input = lines.pop();
    for (const line of lines) if (line.trim() === 'shutdown') shutdown();
  }
});
process.stdin.on('end', shutdown);
require('./chunk0.js');
