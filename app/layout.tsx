import './style.css';
export const metadata = {
 title: 'Culture Capital — Find your people, make your next move',
 description: 'Cultural intelligence for independent business. Turn live Qloo evidence into one small, testable campaign you decide to run.'
};
/* Arm the entrance before first paint, with a failsafe so content can never be
   stranded invisible if the timeline fails to run. */
const ARM = 'document.documentElement.classList.add("intro");setTimeout(function(){document.documentElement.classList.remove("intro")},4000);';
export default function Layout({children}:{children:React.ReactNode}) {
 /* the arming script below sets a class on <html> before hydration, so the
    server and client markup differ by design */
 return <html lang="en" suppressHydrationWarning>
  <body>
   <script dangerouslySetInnerHTML={{__html: ARM}}/>
   <link rel="preconnect" href="https://fonts.googleapis.com"/>
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;1,600&display=swap" rel="stylesheet"/>
   {children}
  </body>
 </html>;
}
