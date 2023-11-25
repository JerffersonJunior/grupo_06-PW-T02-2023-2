import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import styles from './Ranking.module.css'
import Navbar from '../../components/Navbar'

function Ranking(){
    const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { position: 1, name: 'Player 1', score: 1000 },
        { position: 2, name: 'Player 2', score: 900 },
        { position: 3, name: 'Player 3', score: 800 },
        { position: 4, name: 'Player 4', score: 700 },
        { position: 5, name: 'Player 5', score: 600 },
        { position: 6, name: 'Player 6', score: 500 },
        { position: 7, name: 'Player 7', score: 400 },
        { position: 8, name: 'Player 8', score: 300 },
        { position: 9, name: 'Player 7', score: 200 },
        { position: 10, name: 'Player 8', score: 100 },
      ];
      
      await new Promise((resolve) => setTimeout(resolve, 500));
      setRankingData(data);
    };

    fetchData();

  }, []);
      
        return (
            <div>
                <Navbar />
            <div className="ranking-table">     
            <table>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Jogador</th>
                  <th>Pontuação</th>
                </tr>
              </thead>
              <tbody>
                {rankingData.map((player) => (
                  <tr key={player.position}>
                    <td>{player.position}</td>
                    <td>{player.name}</td>
                    <td>{player.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        );
      };
    

export default Ranking