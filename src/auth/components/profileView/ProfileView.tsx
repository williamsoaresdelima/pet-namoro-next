import IProfileView from './IProfileView'
import { styles } from './style'

function ProfileView({ name, lastname, id, email }: IProfileView) {
	return (
		<div className='container'>
			<div className='container-box'>
				<div className="row">
					<div className='input'>
						<label>Id</label>
						<input
							type='text'
							id='id'
							value={id}
							readOnly
						/>
					</div>
				</div>
				<div className="row">
					<div className="input">
						<label>Nome</label>
						<input
							type='text'
							id='nome'
							value={`${name} ${lastname}`}
							readOnly
						/>
					</div>
				</div>
				<div className="row">
					<div className="input">
						<label>Email</label>
						<input
							type='text'
							id='email'
							value={email}
							readOnly
						/>
					</div>
				</div>
			</div>
			<style jsx>{styles}</style>
		</div>
	);
};

export default ProfileView;