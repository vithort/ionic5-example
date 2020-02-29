# ionic5-example
 Aplicativos Híbridos com Ionic 5


# Criar Aplicação

> ionic start ionic5-example tabs


# Iniciar Aplicação

> ionic serve


# Ciclo de Vida Ionic

- ionViewDidLoad: Disparado somente quando uma visão é armazenada na memória. Este evento NÃO é disparado ao entrar em uma exibição que já está em cache. É um bom lugar para tarefas relacionadas ao init.

- ionViewWillEnter: É acionado ao entrar em uma página antes de se tornar a ativa. Use-o para tarefas que você deseja fazer toda vez que entrar na visualização (definindo ouvintes de eventos, atualizando uma tabela, etc.).

- ionViewDidEnter: Disparado ao entrar em uma página, depois que ela se torna a página ativa. Bastante semelhante ao anterior.

- ionViewWillLeave: Despedido quando você sai de uma página, antes de deixar de ser a ativa. Use-o para coisas que você precisa executar toda vez que estiver saindo de uma página (desative os ouvintes de eventos, etc.).

- ionViewDidLeave: Despedido quando você sai de uma página, depois que ela deixa de ser a ativa. Semelhante ao anterior.

- ionViewWillUnload: Disparado quando uma exibição será completamente removida (depois de deixar uma exibição não armazenada em cache).