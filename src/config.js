global.SALT_KEY = '477889c6-a609-47c6-94aa-dbbc9e679db1';
global.EMAIL_TMPL='Olá, <strong>{0}</strong>, seja bem vindo ao Node Store!';

module.exports = 
{
    connectionString:'mongodb://localhost:27017',
    sendgridKey : 'SENHA_DO_SENDGRID',
    containerConnectionString : 'CONNECTION_STRING_AZURE_STORAGE',
    urlBlobStorage:''
}