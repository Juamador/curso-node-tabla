const fs = require('fs');
const colors = require('colors');
const CreateTableFile = async(table = 1, top = 12, listar) => {
    const fileName = `table-${table}`;
    try {
        console.clear();
        console.log('==============================='.blue);
        console.log('        tabla del: ', table);
        console.log('==============================='.blue);

        let salida = '';
        let versionprint = '';
        for (let i = 1; i <= top; i++) {
            salida += `${table} x ${i} = ${ table * i}\n`;
            versionprint += `${table} ${'x'.yellow} ${i} ${'='.yellow} ${ colors.red(table * i)}\n`;
        }

        if (listar) {
            fs.writeFileSync(`./salida/table-${table}.txt`, salida);
            console.log(versionprint);
            return fileName;
        } else {
            return 'Operacion cancelada';
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTable: CreateTableFile
};