const env = require('../env.json');

// Define env variables.
const gearUrl = env.parameters.GearEndpoint;

// GET gear
export const getGear = async () => {
  try {
    const response = await fetch(gearUrl);
    const gear = await response.json();
    return gear;
  } catch (e) {
    console.error('Error retrieveing gear list from Dynamo ', e);
    return e;
  }
}

// PUT gear
export const putGear = async (gearObj) => {
  const { name } = gearObj;

  if (!name) {
    console.error('Must have a name');
    return new Error('Missing Name');
  }

  try {
    const response = await fetch(gearUrl, {
      method: 'PUT',
      body: JSON.stringify(gearObj),
    });
    return response;
  } catch (e) {
    console.error('Error with dynamo put request: ', e);
    return e;
  }
}

// DELETE gear
export const deleteGear = async (gearId) => {
  try {
    const response = await fetch(`${gearUrl}?id=${gearId}`, {
      method: 'DELETE', 
    });
    return response;
  } catch (e) {
    console.error('Error deleting item from DynamoDB: ', e);
    return e;
  }
}
