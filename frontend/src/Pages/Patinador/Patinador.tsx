import React, {useState, useEffect} from 'react'
import {Table} from "react-bootstrap"
import api from '../../services/api'

interface IPatinador{
    id: number;
    nome: string;
    paisDeOrigem: string;
    mediaNotas: string;
}

const Patinadores: React.FC = () => {
    const [patinador, setPatinador] = useState<IPatinador[]>([])

    useEffect(() => {
        loadPatinador()
    }, [])

    async function loadPatinador(){
        const response = await api.get('/patinadores')
        console.log(response)
        setPatinador(response.data)
    }
    return <div className="container">
                <br />
                 <h1 className="text-center"> Patinadores </h1>
                 <br />
                 <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>PAÍS DE ORIGEM</th>
                            <th>MÉDIA NOTAS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        patinador.map(patinador => (
                            <tr key={patinador.id}>
                                <td>{patinador.nome}</td>
                                <td>{patinador.paisDeOrigem}</td>
                                <td>{patinador.mediaNotas}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </Table>
           </div>
}

export default Patinadores
