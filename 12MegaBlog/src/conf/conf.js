const conf = {
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),

    appwriteProjectId: String(import.meta.env. VITE_APP_Project_Id),

    appwriteDatabseId: String(import.meta.env. VITE_APP_DATABASE_ID),

    appwriteBucketId: String(import.meta.env. VITE_APP_BUCKET_ID),
    
    appwriteCollectionId: String(import.meta.env. VITE_APP_COLLECTION_ID),
}

// ye hum isiliye likte hai taki ager by chance wo string mai naa aayi to site crash ho jati hai completely therefore hamne ye mandatory field kar diya hai 

export default conf