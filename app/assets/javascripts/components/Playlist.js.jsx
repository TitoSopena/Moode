var Playlist = React.createClass({

	getInitialState: function(){
		return{
			playlistCollection: []
			
		}
	},
	componentDidMount: function(){
		var url = window.location.href;
  		var query = url.split('/').pop();
		$.get('/moods/'+query, function(models){
				if(this.isMounted()){
					this.setState({
						playlistCollection: models
					});			
				}
		}.bind(this));
	},
  	render: function () {
  			var url = window.location.href;
  			var query = url.split('/').pop();
  		
  			playlistCategories = this.state.playlistCollection.map(function(model){
  					
  						var string = model.mood_id +'';
  						
	  					
	  				if(string == query)
	  				{
	  					console.log('match');
	  					return(

	  						<div  key={model.id} className="grid-holder">
	  						<div className="img-grid-wrapper">
			  				<div className="mona-box2">
			  				<div className="playlist-users">
			  				<a className="music-man" href={"#userplaylist/"+ model.title }><img src={model.imageurl} width="100" height="100"/></a>
			  					<div className="music-title">
			  					<a href={"#profile/" + model.user}>
			  						<div>{model.user}</div>
			  					</a>
			  				
			  					<a href={"#userplaylist/"+ model.title } >
			  						<div  >
			  							<span>{model.title}</span>
			  						</div>
			  					</a>
			  					</div>
			  				</div>
			  				</div>
			  				</div>
			  				</div>
  						);
	  				}
				

  		})

    return (
      <div>
      	<div className="login-header .col12">
      		<h1>Playlist Channel</h1>
      	</div>
      	{playlistCategories}
      </div>
    );
  },
  nav: function(e){
  

  }
});