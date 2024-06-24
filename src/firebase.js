import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    "apiKey" : "AIzaSyAxkXdwFDZ_V694PtGZnULvYgBet5OWewY",
    "authDomain" : "miniproject-u2108036.firebaseapp.com",
    "projectId" : "miniproject-u2108036",
    "storageBucket" : "miniproject-u2108036.appspot.com",
    "messageSenderId" : "836289515108",
    "appId" : "1:836289515108:web:4e9e28af1c5499562dd971",
    "measurementId" : "G-T7DVNYJNJY",
    "serviceAccount" : "service_account.json",
    "databaseURL" : "https://miniproject-u2108036-default-rtdb.asia-southeast1.firebasedatabase.app/",
    "type": "service_account",
    "project_id": "miniproject-u2108036",
    "private_key_id": "17e2295c3f1edd24849448565d0c220c0bf0c14b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDXfi6IZdktjQ25\nk6iiRQ3prHjsA7B46SnCQmyEy2Rj+jE+CaJYYa9f77fzCVl582ppmlLYAw/MFGto\ncI5LjNXf3GHln5bu6olakWyI4ldIhNBPkMFv5IrbrgG27vA63fBz/mgXpuoSMdnI\noOv/H6p+ExEn1WWcqz/Dx2A+qGVQVCMYGIdJ0NSH/LcxlbOEBWUVob5W/JIVyI+e\n/gAhmBlJuiD70UOfs91p6zQuiUfLstzcfvGmthCB7k8gGwrXIYjYAO3lgieHZ0IW\niw0HItF3ByI4w3mn3kHwwEmLytIkJb+S5Ci9visW44LMTSFHX5rRnWIVCrs465Vc\n/8TEy8V3AgMBAAECggEAWiYC4HO/EZO/KKHRe6Tox5cr9QwsEMD2A7rW/Ay8YCjD\n3eCY5mFjRP6bVRRVtrMykqAJRS2ut6DZOBVSKd/ufxqKZ83GDgfW0ykgHvmVKxTI\nsmhry9vvjSwzsmwt2mqLU3Mb570fkeIB6jEL2SxNnjVqyV+4BP0NDWGEbWH0FFCB\nkm1fYqaxtn2kw5PFtwmOD6zNl9we3K8pK5N9NCnBBGFXp74UOP7XE7QJpHMHHyWo\nqsbGV3A3YtB5hsNsHqQLhmOm+uHzGK5KAUPQLCkIquNhSvSE/h18rjfUv4UFoyG7\nz1K6lA1Xyn3G9yeLZcs9cdBf+lKriIH5AFsJbhcW2QKBgQD4nX1HPOneCI4jMDN2\nkbgdSzjw7kTCfFQvuxrNo6YBV5VdFQtHjdX4mOz32SFimTzQDuz6qelRtHFCvDaY\nhf667D3C6ijgrnkISjvoAmGOYWft1/a1Dj1nXm68PJOqb+BcXWdk1hswVXquVkes\noib8sGzV+/26UDg5a21rac6eKQKBgQDd5NM2E+nzvwVyDDgxibS71F+q+JZbg3SS\nb6wUksmI4Fai3WMWYv1pY5SfDck7mXlOS+M8npbQW1brodn4lYf7vYpWNr/hpZ9U\n/Pt2iOHqrHHKTmqMQuqWvN+0neZJZZvlEtTB78n5YTlOsrghvWA3Lw/lawEP8y+/\ncLu4eFh6nwKBgFzO5eJ/EcrKJM1sA/oiQbnlx9bhC5gSs5ax4Tqc+a6MlHyQC4rl\nntfTtrp7OuRE0hfVSo/0d94BXzqLalIby1DaOeAWa7YcS6BVnfFpWiO9pv953GYQ\nb8mzzeDFOFaqtvWkBKH272Vms4p7OPxv99/iuG5VSI2RvrtoqAsuD2ypAoGAPdkZ\nEfqs/BajUu2bABvM94mzfLk7V5ildmeQBFABwpgdLdodU1EWJzjtZQP3shgOGsfG\nN9BQYxUCfj0nv0UWmRF0rKEoDKIYbhzxjlGK/tlAAk6nHh9MueU9SV+1n4Gl2UzN\nZp0Ko+r4iToBXs4lMlx4xs5zhlmXVnn6qOlKaCsCgYAVuHZXUJl8Kj6jcg8IqHsj\nZ7zQgveyI+yvWz+PEjL16xpUyQC0OO39ItLtfgO1HZ46TvakjQF4t8SIbi1kMLDn\nlYS1sjogn2UtpSP88ke8cV/8DcnNZQkrmBmWoAGO1dHy4AFJCT2vCYoIfTmEAlDd\nMeZnAmr6qq5+WrwabXTL2w==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-ptv06@miniproject-u2108036.iam.gserviceaccount.com",
    "client_id": "117799651733316887910",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ptv06%40miniproject-u2108036.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com",
  }
  
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export default app