var testsContext = require.context('./src/components/', true, /.+\Spec\.jsx?$/);

testsContext.keys().forEach(testsContext);

var componentsContext = require.context('./src/components/', true, /^((?!Spec).)*.jsx?$/);

componentsContext.keys().forEach(componentsContext);
