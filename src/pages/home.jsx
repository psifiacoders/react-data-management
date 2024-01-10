import Button from "../components/buttonAuth";

function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-primary-color">
      <div className="phone:max-w-[320px] flex flex-col gap-5">
        <h1 className="text-4xl text-white font-primary font-semibold">
          Form Masuk/Buat Akun
        </h1>
        <div className="flex justify-around">
          <Button bgColor="primary-color" text="Login" textColor="white" />
          <Button bgColor="primary-color" text="Sign Up" textColor="white" />
        </div>
      </div>
    </div>
  );
}

export default Home;
