
const collectionTypeToName = (collection_type) => {
  switch(collection_type) {
    case "accountability_messages": return "Accountability Posts";
    case "accountability_reacts": return "Accountability Post Reacts";
    case "db_users": return "Participants";
    default: throw new Error('collectionTypeToName - collection_type unknown.');
  }
}

module.exports = {
  collectionTypeToName
}