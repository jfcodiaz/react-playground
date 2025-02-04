const profile = {
    name: 'JFco Díaz',
    imageURL: 'https://gravatar.com/avatar/49821ba571b60ccae26586d73c1b4858',
    imageSize: 100
}

export default () => 
  <>
    <div>
        <p>{profile.name}</p>
        <img 
            className="avatar"
            src={profile.imageURL}
            alt={'Foto de ' + profile.name}
            style={{
                width: profile.imageSize,
                height: profile.imageSize
            }}
        />    
    </div>    
  </>