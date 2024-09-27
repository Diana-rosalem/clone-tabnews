function Home() {
  return (
    <div>
      <center>
        <div>
          <h1>Minha ideia brilhante do dia 💡</h1>
        </div>
      </center>
      <div className="divMaster">
        <div className="divImg1">
          <img
            src="https://img1.picmix.com/output/stamp/normal/0/9/8/7/2377890_172c1.gif"
            alt="Stickman"
            width="120"
            height="120"
          />
        </div>
        <div className="textDes">
          <h3>
            Um site para que você compartilhe e discuta com outras pessoas as
            suas mais loucas e brilhantes ideias que teve no dia.
          </h3>
        </div>
        <style>
          {`
            .textDes {
              background-color: #d3d3d3;
              border-radius: 5px;
              color: black;
              text-align: center;
              padding: 10px;
            }
            .divMaster {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .divImg1 {
              background: lightblue;
              align-content: center;
              align-items: center;
              border-radius: 50%;
              width: 150px;
              height: 150px;
              margin-right: 10px;
            }
            .videoConstrucao {
              width: 700px;
              margin-left: auto;
              margin-right: auto;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Home;
