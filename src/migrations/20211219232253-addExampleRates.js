module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('Rates').insertMany([
      {
        _id: '1',
        from: { symbol: 'EUR', description: 'Euro' },
        to: { symbol: 'USD', description: 'United States Dollar' },
        originalRate: 1.123993,
        feePercentage: 10.0,
        feeAmount: 0.1123993,
        totalFee: 1.2363923,
      },
      {
        _id: '2',
        from: { symbol: 'EUR', description: 'Euro' },
        to: { symbol: 'ARS', description: 'Argentine Peso' },
        originalRate: 115.297815,
        feePercentage: 25.0,
        feeAmount: 28.82445375,
        totalFee: 144.12226875,
      }
    ])
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('Rates').deleteOne({ _id: '1' })
    await db.collection('Rates').deleteOne({ _id: '2' })
  }
};
