import virtualQueue from '../assets/fila-virtual.png'
import vantagemUm from '../assets/vantagem 1.jpg'
import vantagemDois from '../assets/vantagem 2.jpg'
import vantagemTres from '../assets/vantagem 3.png'

function Infos() {
    return (
        <>
            <main className="container-geral">
                <figure className='img-relacao'>
                    <img src={virtualQueue} alt="Imagem de um celular escrito Virtual Queue" />
                </figure>
                <aside className='topicos'>
                    <div className="topicos-divs">
                    <div className="topicos-divs-box">
                        <h2>O que é a solução</h2>
                        <p>
                            AceleraSUS é uma plataforma que visa revolucionar o modo como as pessoas aguardam atendimento no sistema de saúde público. A proposta é substituir as filas físicas por uma fila virtual, proporcionando uma experiência mais ágil e eficiente para os usuários do SUS.
                        </p>
                    </div>
                    <div className="topicos-divs-box">
                        <h2>O que ela fará</h2>
                        <ul>
                            <li><span>Eliminação de Filas Físicas:</span> A solução eliminará a necessidade de filas físicas, permitindo que os usuários se registrem virtualmente para o atendimento.</li>
                            <li><span>Agendamento Remoto:</span> Os usuários poderão agendar remotamente o horário de atendimento, escolhendo a opção que melhor se adapte às suas necessidades.</li>
                            <li><span>Notificações em Tempo Real:</span> A plataforma enviará notificações em tempo real, mantendo os usuários informados sobre o status de sua consulta e reduzindo a incerteza em relação ao tempo de espera.</li>
                            <li><span>Acompanhamento da Fila:</span> Os usuários terão acesso a uma interface intuitiva para acompanhar a posição na fila virtual, proporcionando transparência e controle sobre o processo.</li>
                        </ul>
                    </div>
                    <div className="topicos-divs-box">
                        <h2>Como funcionará</h2>
                        <ol>
                            <li>
                                <span>Registro Virtual:</span> Os usuários realizarão um registro virtual na plataforma AceleraSUS, fornecendo informações básicas e agendando a data e horário desejados para o atendimento.
                            </li>
                            <li>
                                <span>Notificações em Tempo Real:</span> A plataforma enviará notificações em tempo real, informando sobre o andamento da fila e lembrando os usuários de seus horários de atendimento.
                            </li>
                            <li>
                                <span>Atendimento Eficiente:</span> Ao chegar à unidade de saúde, os usuários serão atendidos prontamente, sem a necessidade de esperar em filas físicas.
                            </li>
                            <li>
                                <span>Feedback e Melhoria Contínua:</span> A solução permitirá aos usuários fornecer feedback sobre o atendimento, contribuindo para a melhoria contínua do sistema.
                            </li>
                        </ol>
                    </div>
                    </div>
                </aside>
                <article className="solucao">
                    <div className="solucao-texto">
                        <h2>AceleraSUS</h2>
                        <div className='solucao-texto-box'>
                            <p>
                                A revolução no atendimento de saúde. Sem filas, mais agilidade. Registre-se online, seja atendido prontamente. Saúde eficiente ao seu alcance.
                            </p>
                        </div>
                    </div>
                    <button>Mais informações</button>
                </article>
                <section className="vantagens">
                    <h2>Vantagens</h2>
                    <div className="vantagens-todas">
                        <div className="vantagens-todas-box">
                            <img src={vantagemUm} alt="Uma pessoa segurando um carãtoa de agilidade" />
                            <div className='vantagens-todas-box-texto'>
                                <h1>01</h1>
                                <h3>Agilidade Inigualável</h3>
                                <p>Registre-se virtualmente, evite filas e seja atendido prontamente, otimizando seu tempo no sistema de saúde.</p>
                            </div>
                        </div>
                        <div className="vantagens-todas-box">
                            <img src={vantagemDois} alt="Alguém segurando um boneco para dizer que é controle total" />
                            <div className='vantagens-todas-box-texto'>
                                <h1>02</h1>
                                <h3>Controle Total</h3>
                                <p>Acompanhe sua posição na fila em tempo real, receba notificações e agende consultas remotamente, proporcionando conveniência e transparência.</p>
                            </div>
                        </div>
                        <div className="vantagens-todas-box">
                            <img src={vantagemTres} alt="Um robo e um humano apertando as mãos" />
                            <div className='vantagens-todas-box-texto'>
                                <h1>03</h1>
                                <h3>Experiência Humanizada:</h3>
                                <p>Elimine a espera física, tenha atendimento eficiente e contribua para a melhoria contínua do sistema com feedback instantâneo.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Infos