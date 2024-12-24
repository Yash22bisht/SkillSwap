import LinkedIn from "../assets/linkedinLogo.png"
import twitter from "../assets/twitterLogo.png"

const Footer = () => {
    return (
            <footer class="bg-teal-600 text-white py-8 px-10">
                <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* <!-- Section 1: About Us --> */}
                    <div>
                        <h2 class="text-xl font-semibold mb-4">About Swap Skill</h2>
                        <p class="text-sm">
                            Swap Skill is a platform where you can exchange skills, learn new ones, and collaborate with like-minded individuals.
                            Join us and start swapping skills today!
                        </p>
                    </div>

                    {/* <!-- Section 2: Quick Links --> */}
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul class="space-y-2 underline underline-offset-4">
                            <li><a href="/" class=" ">Home</a></li>
                            <li><a href="/browse-skills" class="">Browse Skills</a></li>
                            <li><a href="/how-it-works" class="">How It Works</a></li>
                            <li><a href="/about-us" class="">About Us</a></li>
                            <li><a href="/contact" class="">Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Section 3: Contact Us --> */}
                    <div>
                        <h2 class="text-xl font-semibold mb-4">Contact Us</h2>
                        <p class="text-sm">Email: support@swapskill.com</p>
                        <p class="text-sm">Phone: +91-123-456-7890</p>
                        <div class="flex space-x-4 mt-4">
                            {/* <a href="#" class="hover:text-gray-300">
                                <img src="/src/assets/facebookIcon.png" alt="Facebook" class="w-8 h-8"/>
                            </a> */}
                            <a href="#" class="hover:text-gray-300"><img src={LinkedIn} alt="Twitter" class="w-8 h-8"/></a>
                            <a href="#" class="hover:text-gray-300"><img src={twitter} alt="LinkedIn" class="w-8 h-8"/></a>
                        </div>
                    </div>
                </div>

                {/* <!-- Bottom Footer --> */}
                <div class="text-center mt-8 border-t border-gray-100 pt-4">
                    <p class="text-sm">&copy; 2024 Swap Skill. All Rights Reserved.</p>
                </div>
            </footer>
    )
}

export default Footer
