module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('Rates').insertMany([
      {
        from: { symbol: 'EUR', description: 'Euro' },
        to: { symbol: 'USD', description: 'United States Dollar' },
        originalRate: 1.133151,
        feePercentage: 0.0,
        feeAmount: 0.000000,
        totalRate: 1.133151,
      },
      {
        from: { symbol: 'EUR', description: 'Euro' },
        to: { symbol: 'ARS', description: 'Argentine Peso' },
        originalRate: 115.938860,
        feePercentage: 0.0,
        feeAmount: 0,
        totalRate: 115.938860,
      },
      {
        from: { symbol: 'USD', description: 'United States Dollar' },
        to: { symbol: 'ARS', description: 'Argentine Peso' },
        originalRate: 102.315454,
        feePercentage: 0.0,
        feeAmount: 0,
        totalRate: 102.315454,
      },
      {
        from: { symbol: 'EUR', description: 'Euro' },
        to: { symbol: 'BRL', description: 'Brazilian Real' },
        originalRate: 6.423153,
        feePercentage: 0.0,
        feeAmount: 0,
        totalRate: 6.423153,
      },
      {
        from: { symbol: 'USD', description: 'United States Dollar' },
        to: { symbol: 'BRL', description: 'Brazilian Real' },
        originalRate: 5.668439,
        feePercentage: 0.0,
        feeAmount: 0,
        totalRate: 5.668439,
      },
      {
        from: { symbol: 'BRL', description: 'Brazilian Real' },
        to: { symbol: 'ARS', description: 'Argentine Peso' },
        originalRate: 18.050147,
        feePercentage: 0.0,
        feeAmount: 0,
        totalRate: 18.050147,
      },
    ])
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    await db.collection('Rates').deleteMany({})
  }
};
