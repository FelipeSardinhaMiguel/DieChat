 // ========================================== //
        // FUNÇÃO PARA ENVIAR MENSAGEM                //
        // ========================================== //
        function enviarMensagem() {
            // 1. Pega o input e a área de mensagens
            const input = document.getElementById('inputMensagem');
            const area = document.getElementById('areaMensagens');
            const mensagemVazia = document.getElementById('mensagemVazia');
            
            // 2. Pega o texto digitado e remove espaços extras
            const texto = input.value.trim();
            
            // 3. Verifica se o usuário digitou algo
            if (texto === '') {
                alert('Por favor, digite uma mensagem!');
                return; // Sai da função se não tiver texto
            }
            
            // 4. Remove a mensagem "Nenhuma mensagem ainda"
            if (mensagemVazia) {
                mensagemVazia.remove();
            }
            
            // 5. Pega a hora atual
            const agora = new Date();
            const hora = String(agora.getHours()).padStart(2, '0') + ':' + 
                        String(agora.getMinutes()).padStart(2, '0');
            
            // 6. Cria a mensagem (como usuário atual)
            const mensagemHTML = `
                <div class="mensagem minha">
                    <div class="nome">👤 Você</div>
                    <div class="texto">${texto}</div>
                    <div class="hora">${hora}</div>
                </div>
            `;
            
            // 7. Adiciona a mensagem na área
            area.innerHTML += mensagemHTML;
            
            // 8. Rola para a última mensagem (mantém visível)
            area.scrollTop = area.scrollHeight;
            
            // 9. Limpa o input e foca nele
            input.value = '';
            input.focus();
        }
        
        // ========================================== //
        // FUNÇÃO PARA ENVIAR COM A TECLA ENTER      //
        // ========================================== //
        function enviarComEnter(event) {
            if (event.key === 'Enter') {
                enviarMensagem();
            }
        }
        
        // ========================================== //
        // FUNÇÃO PARA LIMPAR TODAS AS MENSAGENS     //
        // ========================================== //
        function limparMensagens() {
            if (confirm('Tem certeza que deseja limpar todas as mensagens?')) {
                const area = document.getElementById('areaMensagens');
                area.innerHTML = `
                    <div class="mensagem-vazia" id="mensagemVazia">
                        📝 Nenhuma mensagem ainda. <br>
                        Digite algo e clique em "Enviar"!
                    </div>
                `;
            }
        }
        
        // ========================================== //
        // FOCA NO INPUT AUTOMATICAMENTE AO CARREGAR //
        // ========================================== //
        window.onload = function() {
            document.getElementById('inputMensagem').focus();
        };