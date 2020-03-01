# ionic5-example
 Aplicativos Híbridos com Ionic 5


# Criar Aplicação

> ionic start ionic5-example tabs


# Iniciar Aplicação

> ionic serve


# Criando Páginas

> ionic g page pages/inicio
> 
> ionic g page pages/alert --spec=false
> 
> ionic g page pages/action-sheet --spec=false
> 
> ionic g page pages/cards --spec=false
> 
> ionic g page pages/datas --spec=false
> 
> ionic g page pages/grids --spec=false
> 
> ionic g page pages/input --spec=false


# Criando Módulos e Componentes

> ionic g module components
> 
> ionic g component components/header --spec=false
> 
> ionic g component components/menu --spec=false


## Ao criar componentes devemos...

### Importar em...

- No: _`./src/app/app.module.ts`_

> import { ComponentsModule } from './components/components.module';
  
> imports: [
>   ...
>   ComponentsModule
>   ...    
> ]


- Nas páginas que vão utilizar: _`./src/app/pages/alert/alert.module.ts`_

> import { ComponentsModule } from './components/components.module';
  
> imports: [
>   ...
>   ComponentsModule
>   ...    
> ]


### E...

- Declarar e Exportar em: _`./src/app/components/components.module.ts`_

> import { HeaderComponent } from './header/header.component';

> declarations: [
>   ...
>   HeaderComponent
>   ...
> ],
> exports: [
>   ...
>   HeaderComponent
>   ...
> ]


## Para que os elementos Ionic funcionem no Componente, é necessário importar os mesmos

_`./src/app/components/components.module.ts`_

> import { IonicModule } from '@ionic/angular';

> imports: [
>   ...
>   IonicModule
>   ...
> ]


## Criando Rotas

_`./src/app/pages/action-sheet/action-sheet-routing.module.ts`_

> ...
> children: [
>   {
>       path: 'alert',
>       loadChildren: '../alert/alert.module#AlertPageModule'
>   }
> ]
> ...



# Ciclo de Vida Ionic

- ionViewDidLoad: Disparado somente quando uma visão é armazenada na memória. Este evento NÃO é disparado ao entrar em uma exibição que já está em cache. É um bom lugar para tarefas relacionadas ao init.

- ionViewWillEnter: É acionado ao entrar em uma página antes de se tornar a ativa. Use-o para tarefas que você deseja fazer toda vez que entrar na visualização (definindo ouvintes de eventos, atualizando uma tabela, etc.).

- ionViewDidEnter: Disparado ao entrar em uma página, depois que ela se torna a página ativa. Bastante semelhante ao anterior.

- ionViewWillLeave: Despedido quando você sai de uma página, antes de deixar de ser a ativa. Use-o para coisas que você precisa executar toda vez que estiver saindo de uma página (desative os ouvintes de eventos, etc.).

- ionViewDidLeave: Despedido quando você sai de uma página, depois que ela deixa de ser a ativa. Semelhante ao anterior.

- ionViewWillUnload: Disparado quando uma exibição será completamente removida (depois de deixar uma exibição não armazenada em cache).