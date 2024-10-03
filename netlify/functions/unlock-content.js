exports.handler = async function(event, context) {
  const object = event.queryStringParameters.object;
  
  const content = {
    person: { content: 'Exklusives Video freigeschaltet!', url: 'https://example.com/video' },
    car: { content: 'Neues Mini-Spiel verfügbar!', url: 'https://example.com/game' },
    // Fügen Sie hier weitere Objekte hinzu...
  };

  return {
    statusCode: 200,
    body: JSON.stringify(content[object] || { content: 'Allgemeiner Inhalt', url: 'https://example.com' })
  };
};
