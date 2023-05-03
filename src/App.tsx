import { QueryClientProvider, QueryClient } from 'react-query';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import { HomePage } from '@home';


const queryClient = new QueryClient();

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

function App () {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<HomePage />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
