<script>
    let username = '';
    let password = '';

    function handleLogin() {
        let data = {
            username,
            password
        };

		console.log(JSON.stringify(data));

        let url = 'http://localhost:8081/auth/login';

        fetch(url, {
            method: 'POST',
            mode: 'cors', //중요!!!
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
		.then(res=>res.json())
        .then((response) => {
            let message = response['data'];
            alert(message);
        })
        .catch((error) => {
            alert('에러: ' + error.message);
        });
    }
</script>

<div class="root">
	<div class="container mt-3">
		<form action="/auth/login">
			<div class="mb-3 mt-3">
				<label for="username" class="form-label">Username:</label>
				<input
					type="text"
					class="form-control"
					id="username"
					placeholder="Enter username"
					bind:value={username}
				/>
			</div>

			<div class="mb-3">
				<label for="password" class="form-label">Password:</label>
				<input
					type="password"
					class="form-control"
					id="password"
					placeholder="Enter password"
					bind:value={password}
				/>
			</div>
			<button type="button" id="btn-login" class="btn btn-secondary" on:click={handleLogin}>로그인</button>
		</form>
	</div>
</div>

<style lang="scss">
	.root {
		.best-seller-banner {
			height: 25rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.product-items {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}
</style>
