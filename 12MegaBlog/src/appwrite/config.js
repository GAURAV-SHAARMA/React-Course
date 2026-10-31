import conf from '../conf.js'

import { Client, ID ,Databases , Storage , Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client);

        this.bucket = new Storage(this.client);
    }

    async createPost({title ,slug , content , featuredImage , status , userId}){
        try{    
            return await this.databases.createDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollection,
                slug,
                //slug is document ki id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
            
        }
    }

    async updatePost(slug ,{title , content , featuredImage , status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                slug
            )
            return true // ki han delete ho gaya hai
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
            return false
        }
    }

    async getPost(slug){
        try{
            await this.databases.deleteDocument(
            conf.appwriteDatabseId,
            conf.appwriteCollectionId,
            slug
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        // ye queries ek variable define kiya hai 

        // Query hum tabhi laga sakte hai jab hamare pass status ka indexes bane huve ho Appwrite mai ("status" , "active "->>>>these are like keys)

        //sare post dedo jinke ander query hai ki unka status Active hona chaihye

        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabseId,
                conf.appwriteCollectionId,
                queries,
        
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
            return false 
        }

    }

    //file upload services

    async uploadFile(file){// parameter mai actual file name hona chahiye
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error); 
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error" , error);
            return false
        }
    }
    
    //this is very fast so it doesnt return any promise so we dont need any await

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service()
export default service;

