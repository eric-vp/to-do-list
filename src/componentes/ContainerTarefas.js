import styled from "styled-components";
import { useState } from "react";

const ContainerTarefasUl = styled.ul`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    padding: 3rem 600px;

    list-style: none;
`

const InputTextoContainer = styled.div`
    display: flex;
    justify-content: center;
`

const InputTexto = styled.input`
    background: transparent;
    margin-bottom: 3rem;
    
    width: 500px;
    padding: .5rem 1rem;

    font-size: 24px;
    color: #284b63;
    
    border: none;
    border-bottom: 2px solid #284b63;

    &:focus {
        border-bottom: 2px solid #d84727;
        outline: none;
    }
`

const TarefaDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .8rem;
`

const TarefaCheckbox = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;

    appearance: none;    
    -webkit-appearance: none;
    height: 30px;
    width: 30px;

    border: 2px solid #284b63;
    cursor: pointer;

    &:after {
        content: "x";
        font-weight: 900;
        font-size: 25px;
        margin-top: -5px;
        color: #f7ede2;

        display: none;
    }
    
    &:hover {
        border: 2px solid #d84727;
    }
    
    &:checked {
        background: #d84727;
        border: none;
    }

    &:checked:after {
        display: block;
    }
`

const TarefaItem = styled.input`
    margin-left: .8rem;
    font-size: 20px;
    text-transform: uppercase;

    background: transparent;
    
    width: 500px;
    color: #284b63;
    
    border: none;
    
    &:focus {
        border-bottom: 2px solid #d84727;
        outline: none;
    }
`

function ContainerTarefas() {
    let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const [listaTarefas, setListaTarefas] = useState(tarefasSalvas);

    const [itemTarefa, setItemTarefa] = useState("");
    const [checked, setChecked] = useState(false);

    const removerTarefa = (evento) => {
        const listaAtualizada = listaTarefas.filter(tarefa => tarefa.id != evento.target.id);
        setListaTarefas(listaAtualizada);
        console.log(evento.target.id);
        console.log(listaAtualizada);
        localStorage.setItem('tarefas', JSON.stringify(listaAtualizada));

        evento.target.remove();
    };

    const atualizarTarefa = (evento) => {
        console.log(listaTarefas);
        listaTarefas.forEach(tarefa => {
            if (tarefa.id == evento.target.id) {
                tarefa.descricao = evento.target.value;
                setItemTarefa(evento.target.value);
                localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
            };
        });
    };

    return (
        <ContainerTarefasUl>
            <InputTextoContainer>
                <InputTexto
                    type="text"
                    placeholder="Adicione uma tarefa..."
                    onBlur={evento => {
                        const verificaId = (id) => {
                            let idVerificado = id;
                            if (listaTarefas.some(obj => obj.id == id)) {
                                idVerificado += 1;
                            }
                            return idVerificado;
                        }

                        let novaTarefa = {
                            descricao: evento.target.value,
                            id: verificaId(listaTarefas.length),
                            concluido: false
                        }

                        if (novaTarefa.descricao !== '') {
                            setListaTarefas([...listaTarefas, novaTarefa]);
                            evento.target.value = '';
                        }
                    }}
                />
            </InputTextoContainer>
            {listaTarefas.map(tarefa => {
                return (
                    <TarefaDiv key={tarefa.id} >
                        <TarefaCheckbox
                            type="checkbox"
                            id={tarefa.id}
                            defaultChecked={tarefa.concluido}
                            onClick={e => {
                                listaTarefas.forEach(e => {
                                    if (e.id == tarefa.id) {
                                        if (!tarefa.concluido) {
                                            tarefa.concluido = true;
                                            setChecked(tarefa.concluido);
                                        } else {
                                            tarefa.concluido = false;
                                            setChecked(tarefa.concluido);
                                        }
                                        console.log(checked);
                                        // console.log(tarefa.concluido);
                                    };
                                    localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
                                })
                            }} />
                        <TarefaItem
                            type="text"
                            value={tarefa.descricao}
                            id={tarefa.id}
                            onChange={e => atualizarTarefa(e)}
                            onBlur={e => { if (e.target.value == "") { removerTarefa(e) } }
                            } />
                    </TarefaDiv>
                )
            })}
            {localStorage.setItem('tarefas', JSON.stringify(listaTarefas))}
        </ContainerTarefasUl>
    )
}

export default ContainerTarefas;
