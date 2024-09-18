import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "./constants/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster position='bottom-center' />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
