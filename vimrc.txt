" Plugins will be downloaded under the specified directory.
call plug#begin('~/.vim/plugged')

Plug 'tpope/vim-sensible'
Plug 'junegunn/seoul256.vim'
Plug 'lervag/vimtex'
Plug 'easymotion/vim-easymotion'
Plug 'ericcurtin/CurtineIncSw.vim'

Plug 'https://github.com/pangloss/vim-javascript.git'

Plug 'neoclide/coc.nvim', {'branch': 'release'}
" Plug 'xavierd/clang_complete'
Plug 'preservim/nerdtree'
Plug 'KabbAmine/vCoolor.vim'	
Plug 'yuezk/vim-js'
Plug 'maxmellon/vim-jsx-pretty'

Plug 'https://github.com/valloric/MatchTagAlways.git'
Plug 'mattn/emmet-vim'
Plug 'tomtom/tcomment_vim'

Plug 'https://github.com/ap/vim-css-color.git' 

"Themes
Plug 'ayu-theme/ayu-vim' " or other package manager
Plug 'arcticicestudio/nord-vim'
Plug 'https://github.com/dracula/vim.git'


call plug#end()

"set termguicolors
"let ayucolor="dark"
colorscheme dracula
" this is for seting the temp file director so it doesnt show all the other
"
" stuff
"set backupdir=$TMPDIR
"set directory=$TMPDIR
"set backupdir=~/vimtmp//,.
"set directory=~/vimtmp//,.

let g:clang_library_path='/usr/lib/llvm-3.8/lib'

map <F5> :call CurtineIncSw()<CR>


autocmd vimenter * NERDTreeVCS
autocmd VimEnter * wincmd p

set hidden "this is to allow switicing between buffers without savaing
"nmap <F6> :NERDTree %<CR>

set breakindent
map <leader>r :NERDTreeToggle %<cr>

set tabstop=2 softtabstop=2 expandtab shiftwidth=2 smarttab

let g:EasyMotion_leader_key = '<space>'

let g:vcoolor_map = '<NEW_MAPPING>'

nnoremap <c-k> :VCoolor<CR>

inoremap <silent><expr> <TAB>
                        \ pumvisible() ? "\<C-n>" :
                        \ <SID>check_back_space() ? "\<TAB>" :
                        \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
        let col = col('.') - 1
        return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" this does the auto indentation for the entire file
nnoremap === mzgg=G`zzz

" Use <c-space> to trigger completion.
inoremap <silent><expr> <c-space> coc#refresh()

nnoremap H gT
nnoremap L gt

if v:progname =~? "evim"
        finish
endif

" Get the defaults that most users want.
source $VIMRUNTIME/defaults.vim

if has("vms")
        set nobackup		" do not keep a backup file, use versions instead
else
        set backup		" keep a backup file (restore to previous version)
        if has('persistent_undo')
                set undofile	" keep an undo file (undo changes after closing)
        endif
endif

if &t_Co > 2 || has("gui_running")
        " Switch on highlighting the last used search pattern.
        set hlsearch
endif

" Only do this part when compiled with support for autocommands.
if has("autocmd")

        " Put these in an autocmd group, so that we can delete them easily.
        augroup vimrcEx
                au!

                " For all text files set 'textwidth' to 78 characters.
                autocmd FileType text setlocal textwidth=78

        augroup END

else

        set autoindent		" always set autoindenting on

endif " has("autocmd")



syntax enable           " enable syntax processing
set tabstop=4       " number of visual spaces per TAB

set softtabstop=4   " number of spaces in tab when editing

set expandtab       " tabs are spaces
set number              " show line numbers
set showcmd             " show command in bottom bar
set wildmenu            " visual autocomplete for command menu
set showmatch           " highlight matching [{()}]
set incsearch           " search as characters are entered
set hlsearch            " highlight matches
set number                     " Show current line number
set relativenumber             " Show relative line numbers

let g:vimtex_view_method = 'skim'
" esc in insert mode
inoremap kj <esc>
nnoremap j gj
nnoremap k gk
" esc in command mode
cnoremap kj <C-C>
" Note: In command mode mappings to esc run the command for some odd
" historical vi compatibility reason. We use the alternate method of
" existing which is Ctrl-C

" Add optional packages.
"
" The matchit plugin makes the % command work better, but it is not backwards
" compatible.
" The ! means the package won't be loaded right away but when plugins are
" loaded during initialization.
if has('syntax') && has('eval')
        packadd! matchit
endif



set backupdir=~/vimtemp//
set directory=~/vimtemp//
set undodir=~/vimtemp//
