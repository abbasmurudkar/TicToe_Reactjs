export function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],//0
      [3, 4, 5],//1
      [6, 7, 8],//2
      [0, 3, 6],//3
      [1, 4, 7],//4
      [2, 5, 8],//5
      [0, 4, 8],//6
      [2, 4, 6],//7
    ];
    for (let i = 0; i < lines.length; i++) { //0;0<8;1
      const [a, b, c] = lines[i];//0
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { 
        return squares[a];
      }
    }
    return null;
  }
  //0 && 0 === 1 && 0 === 2
  //3 && 3 === 4 && 