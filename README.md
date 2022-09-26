# ddu-filter-sorter_alpha

Sort alphabetically for ddu.vim

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
" Use the sorter.
call ddu#custom#patch_global({
    \   'sourceOptions': {
    \     '_': {
    \       'sorters': [
    \         'sorter_alpha',
    \       ],
    \     },
    \   }
    \ })
```
