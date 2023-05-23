function formatColombianPesos(amount = 0) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(amount).replace(',00','');    
}

export default formatColombianPesos;
