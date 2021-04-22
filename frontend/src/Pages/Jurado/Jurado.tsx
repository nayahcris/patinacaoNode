import React, {useState, useEffect} from 'react'
import {Table} from "react-bootstrap"
import '../../estilos.css'
import api from '../../services/api'

interface IJurado{
    id: number;
    nome: string;
    paisDeOrigem: string;
    notaPatinador: number;
    id_patinador: number
}
const Jurados: React.FC = () => {
    const [jurado, setJurado] = useState<IJurado[]>([])

    useEffect(() => {
        loadJurado()
    }, [])

    async function loadJurado(){
        const response = await api.get('/jurados')
        console.log(response)
        setJurado(response.data)
    }
    return <div className="container">
                <h1 className="text-center">Jurados</h1>
                <br />
                 <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>PAÍS DE ORIGEM</th>
                            <th>NOTA PATINADOR</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        jurado.map(jurado => (
                            <tr key={jurado.id}>
                                <td>{jurado.nome}</td>
                                <td>{jurado.paisDeOrigem}</td>
                                <td>{jurado.notaPatinador}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
                </Table>
            </div>
}
export default Jurados
