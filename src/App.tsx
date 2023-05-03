import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


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
			<BrowserRouter>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<HomePage />
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
