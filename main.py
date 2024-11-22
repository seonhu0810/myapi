from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
# CORS 미들웨어 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 모든 도메인에서 오는 요청 허용
    allow_credentials=True,
    allow_methods=["*"],  # 모든 HTTP 메소드(GET, POST 등) 허용
    allow_headers=["*"],  # 모든 헤더 허용
)
@app.get("/hello")
def hello():
    return {"message":"HELLO"}