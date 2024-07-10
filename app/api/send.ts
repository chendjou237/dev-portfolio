
// Import necessary modules from Next.js and other libraries
import { Resend } from 'resend';

// Define the API route handler
export default async function POST(
  req: any,
  res: any
) {
  // Ensure the method is POST
  if (req.method === 'POST') {
	try {
	  // Extract data from the request body
	  const data = req.body;

	  // Call the resend send method with the extracted data
	  // Assuming resendSendMethod is a function you've defined to handle the data
	  const response = await resendSendMethod(data);

	  // Send a success response with the result
	  res.status(200).json({ success: true, data: response });
	} catch (error) {
	  // Handle any errors that occur during the process
	  res.status(500).json({ success: false, error: 'Server error' });
	}
  } else {
	// If the request method is not POST, return a 405 Method Not Allowed error
	res.setHeader('Allow', ['POST']);
	res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// Example resendSendMethod function
// Replace this with your actual function to process the data
async function resendSendMethod(data: any) {
   const resend = new Resend(process.env.RESEND_API_KEY);

  // Process the data
  console.log('Processing data:', data);
   const {email, name, message} = data;
  await resend.emails.send({
   from: `Acme <${email}>`,
   to: ['chenxhenor@gmail.com'],
   subject: 'feedback from ' + name + ' on the portfolio',
   text: message,
     
   headers: {
     'X-Entity-Ref-ID': '123456789',
   },
   tags: [
     {
       name: 'category',
       value: 'confirm_email',
     },
   ],
 });

  // Return a response or result
  return { message: 'Data processed successfully', status: 'success' };
}