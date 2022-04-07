<template>
	<header>
		<h1>
            <router-link to='/'>
                <img alt="Vue logo" src="../../assets/logo.png">
            </router-link>
        </h1>
        <ul class="menu">
			<li><router-link to='/'>Home</router-link></li>
            <li><router-link to='/dashboard'>Dashboard</router-link></li>
			<li><router-link to='/login'>Login</router-link></li>
			<li><router-link to='/register'>Register</router-link></li>
		</ul>
	</header>
</template>

<script>
export default {
}
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    border-bottom:1px solid #ccc;
    }
header h1 {
    width: 50px;
    }
header h1 img {
    width: 100%;
}
.nav {
    align-items: center;
}
.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    margin: 0;
    padding: 0;
    }
.menu li {
    color: #333;
    font-size: 18px;
    font-weight: 700;
    list-style: none;
    text-decoration: none;
}
</style>