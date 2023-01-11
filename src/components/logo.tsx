import Image from "next/image";


const Logo = () => {
	return (
		<>

			<div style={{marginLeft:"30%",marginTop:"15%"}}>
				<Image
					src="/assets/images/banners/logo.png"
					height="70"
					width="180"
				/>
			</div>


		</>
	);
};

export default Logo;